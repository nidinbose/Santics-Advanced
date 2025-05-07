import Router from 'express'
import * as request from './requestHandler.js'
import * as product from './countrollers/productService.js'
import * as User from './countrollers/userService.js'
import Auth from './middleware/auth.js'


const router=Router()


// Admin Routes
router.route('/adminregester').post(request.adminRegister)
router.route('/adminlogin').post(request.adminLogin)
router.route('/adminforgot').post(request.adminForget)
router.route('/resetadminpassword').post(request.resetAdminPassword)
router.route('/adminhome').post(Auth,request.adminHome)
router.route('/usercount').get(request.userCount)
router.route('/productcount').get(request.productCount)
router.route('/ordercount').get(request.orderCount)
router.route('/fullrevenue').get(request.fullRevenue)

// User Routes
router.route('/user').post(User.userRegister)
router.route('/login').post(User.userLogin)
router.route('/home').get(Auth,User.Home)

router.route('/logout').get(Auth,User.Logout)
router.route('/userforgot').post(request.userForget)
router.route('/resetuserpassword').post(request.resetUserPassword)



router.route('/addcase').post(product.addProduct)
router.route('/getcase').get(product.getProduct)
router.route('/getcaseedit/:id').get(product.getProductById)
router.route('/updatecase/:id').patch(product.updateProduct)
router.route('/deletecase/:id').delete(product.deleteProduct)

router.get('/cart/:userId', request.getCart);
router.route("/add-to-cart").post(Auth,request.addToCart);
router.post('/remove-from-cart', request.removeFromCart);
router.post('/increment-cart-item', request.incrementCart);
router.post('/decrement-cart-item', request.decrementCart);

router.route('/addaddress').post(request.addAddress)
router.route('/getaddress/:userId').get(request.getAddress)
router.route('/deleteaddress/:id').delete(request.deleteAddress)
router.route('/updateaddress/:id').patch(request.updateAddress)



router.route('/payment/upi-payment').post(request.upiPayment)
router.route('/getuserdata/:id').get(request.getUserData)


router.route('/payment/createorder').post(request.razorpayPayment)
router.route('/verifypayment').post(request.verifyPayment)
router.route('/orders/:userId').get(request.viewOrdersByUserId)
router.route('/admin/updatestatus/:orderId').patch(request.updateStatus)
router.route('/clear-cart/:userId').delete(request.deleteFromCart)
router.route('/cancalorder/:orderId').post(request.cancelOrder)



// admin


router.route('/admin/userlists').get(request.userlist)
router.route('/admin/getordersadmin').get(request.getOrdersAdmin)
router.route('/adminhomelog').get(Auth,request.adminHomeLog)
router.route('/admin/deleteuser/:id').delete(request.deleteUser)




// router.route('/a').post(request.addCase)
// router.route('/p').get(request.getCase)



export default router