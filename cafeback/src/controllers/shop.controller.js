const { Shop } = require('../models/shops')

const shop = {
  list: async (req, res) => {
    try {
      const shops = await Shop.find({})
      res.json(shops)
    } catch (error) {
      res.send(error)
    }
  },
  getById: async (req, res) => {
    const { id } = req.params

    Shop.findById(id)
      .then(shop => {
        res.status(200).json(shop)
      })
      .catch(err => console.log(err))
  },
  create: async (req, res) => {
    const { name, image, address, phone, email, long, lat } = req.body

    const createdShop = new Shop({
      name, image, address, phone, email, long, lat
    })

    try {
      await createdShop.save()
      return res.status(201).json({
        shop: createdShop
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        error
      })
    }
  },
  update: async (req, res) => {
    const shopId = req.params.id

    const { name, image, address, phone, email, long, lat } = req.body

    const updateData = {
      name, image, address, phone, email, long, lat
    }

    try {
      await Shop.findByIdAndUpdate(shopId, updateData)
      res.status(200).json({ msg: 'Coffee shop updated', shop: updateData })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  deleteShop: async (req, res) => {
    const shopId = req.params.id

    try {
      await Shop.findByIdAndRemove(shopId)
      res.send({ msg: `Coffe shop with id:${shopId} was deleted` })
    } catch (error) {
      console.log('Delete error: ', error)
    }
  }
}

module.exports = shop
