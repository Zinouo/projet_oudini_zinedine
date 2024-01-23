    const db = require('../models');
    const Commande = db.commande;
    const CommandeItem = db.commandeItem;
    const Produit = db.produit;

    // Function to update product stock
    async function updateStock(produitId, quantity, transaction) {
        const produit = await Produit.findByPk(produitId);
        if (!produit || produit.stock < quantity) {
            throw new Error('Insufficient stock for produit ID: ' + produitId);
        }
        produit.stock -= quantity;
        await produit.save({ transaction });
    }

    // Create an order
    exports.createOrder = async (req, res) => {
        const { utilisateurId, items } = req.body;
        let totalCost = 0;

        const transaction = await db.sequelize.transaction();

        try {
            for (const item of items) {
                const produit = await Produit.findByPk(item.produitId);
                if (!produit) {
                    throw new Error('Produit not found: ' + item.produitId);
                }
                totalCost += produit.prix * item.quantity;
                await updateStock(item.produitId, item.quantity, transaction);
            }

            const commande = await Commande.create({ utilisateurId, coûtTotal: totalCost }, { transaction });

            for (const item of items) {
                await CommandeItem.create({
                    commandeId: commande.id,
                    produitId: item.produitId,
                    quantite: item.quantity,
                    prix: produit.prix
                }, { transaction });
            }

            await transaction.commit();
            res.status(200).json({ message: 'Commande created successfully', commandeId: commande.id });
        } catch (error) {
            await transaction.rollback();
            res.status(500).send({ message: error.message || 'Error creating commande' });
        }
    };
