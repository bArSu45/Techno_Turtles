import userModel from "../../../../models/user.model";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  dbConnect().catch((err) => {
    res.status(405).send({ error: err });
  });

  let { method } = req;

  switch (method) {
    //localhost:3000/api/users/auth/signup
    // send signup form {name, email, pincode} in the body
    case "POST": {
      try {
        let userform = req.body;
        if (userform.email === "pv3216@gamil.com") {
          userform = { ...userform, role: "admin" };
        } else {
          userform = { ...userform, role: "user" };
        }
        let user = new userModel(userform);
        await user.save();
        // res.cookie("test","test");
        let mainToken = jwt.sign(
          { email: user.email, role: user.role },
          "SecretKey1234",
          {
            expiresIn: "7 days",
          }
        );
        // let refreshToken=jwt.sign({email:user.email, role:user.role} , "SecretRefreshKey1234", {
        //   expiresIn: "5 minutes"
        // })

        sentOTPEmail(
          user.email,
          "signup successfull",
          `Hi ${user.name}, You are successfully signedin in heavens Baskests website"`
        );
        return res.status(200).send(mainToken);

        //navigate to otp entering page because user exists
      } catch (error) {
        return res.status(409).send({ errors: error });
      }
    }
  }
}
