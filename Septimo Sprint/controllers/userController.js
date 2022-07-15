// const {validationResult}= require("express-validator")
// const bcryptjs =require("bcryptjs")

// const register = (req, res) => {
//     return res.render('register');
// };

// const processRegister = (req, res) => {
//     const resultValidation = validationResult(req);

//     if (resultValidation.errors.length > 0) {
//         return res.render('register', {
//             errors: resultValidation.mapped(),
//             oldData: req.body
//         });
//     }

//     let userInDB = User.findByField('email', req.body.email);

//     if (userInDB) {
//         return res.render('register', {
//             errors: {
//                 email: {
//                     msg: 'Este email ya está registrado'
//                 }
//             },
//             oldData: req.body
//         });
//     }

//     let userToCreate = {
//         ...req.body,
//         password: bcryptjs.hashSync(req.body.password, 10),
//         avatar: "/Images/Avatares/" + req.file.filename
//     }

//     let userCreated = User.create(userToCreate);

//     return res.redirect('/views/login');
// };

// const login = (req, res) => {
//     return res.render ("login")
// };

// const loginProcess = (req, res) => {
//     let userToLogin = User.findByField("email", req.body.email);
//     const resultValidation = validationResult (req)
//     if (userToLogin){
//         let passwordValid = bcryptjs.compareSync(req.body.password, userToLogin.password);
//         if (passwordValid) {
//             delete userToLogin.password; //borro la contraseña
//             req.session.userLogged = userToLogin;

//             if(req.body.recordar_usuario){ //recordar Usuario en Login
//                 res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2})
//             }

//             return res.redirect ("/views/profile");
//         }
//         return res.render ("login", {
//             errors: {
//                 password: {
//                     msg:"Contraseña Incorrecta"
//                 }
//             },
//         oldData:req.body //NO ESTÁ FUNCIONANDO, ESTO DEBERÍA DEVOLVER EL USUARIO QUE ESCRIBISTE Y QUE YA ESTÁ REGISTRADO POR BODY
//         });
//     }
//     return res.render ("login", {
//         errors: {
//             email: {
//                 msg:"El usuario no está registrado"
//             }
//         },
//         oldData:req.body //NO ESTÁ FUNCIONANDO, ESTO DEBERÍA DEVOLVER EL USUARIO QUE ESCRIBISTE Y QUE YA ESTÁ REGISTRADO POR BODY
//     });
// };

// const profile = (req, res) => {
//     return res.render ("userProfile",{
//         user:req.session.userLogged
//     });
// };
    

// const userController = {
//     login,
//     loginProcess,
//     profile,
//     register,
//     processRegister,
// };

// module.exports = userController