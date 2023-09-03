import axios from "axios";

export const postLogin = (req, res) => {
  axios
    .post("https://fakestoreapi.com/auth/login", {
      body: req.body,
    })
    .then((res) => {
      console.log(res);
    });
  res.status(200).json({ message: "success" });
};
