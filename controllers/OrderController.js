import OrderModel from '../models/Order.js'

const OrderController = {
    create(req,res) {
        OrderModel.create(req.body)
        .then(order => res.status(200).send(order))
        .catch(error => {
            console.error(error)
            res.status(500).send({message: 'Was not possible to create the order'})
        });
    },
    getAllOrders(req,res) {
        OrderModel.find()
        .then(order => res.status(200).send(order))
        .catch(error => {
            console.log(error);
            res.status(500).send({message: 'Error getting the order'})
        })
    },
    getOneOrder(req,res) {
        const {id} = req.params
        OrderModel.findById(id)
        .then(order => res.status(200).send(order))
        .catch(error => {
            console.log(error)
            res.status(500).send({message: 'Error getting the order'})
        })
    },
    update(req,res) {
        const {id} = req.params
        OrderModel.findByIdAndUpdate(id, req.body, {
            new: true
        })
        .then(order => res.send(order))
        .catch(error => {
            console.log(error)
            res.status(500).send({message: 'Error updating order'})
        })
    },
    delete(rew,res) {
        const {id} = req.params
        OrderModel.findByIdAndDelete(id)
        .then(order => res.status(200).send({message: 'Order successfully deleted'}))
        .catch(error => {
            console.log(error)
            res.status(500).send({message: 'Error deleting the order'})
        })
    }
}
export default OrderController;