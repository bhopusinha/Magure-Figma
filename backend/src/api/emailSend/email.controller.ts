import { NextFunction, Request, Response } from "express";
import nodemailer from "nodemailer";
import env from "../../config/environment.config";
import createHttpError from "http-errors";

export const sendMail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email }: { email: string } = req.body;

  console.log(email);

  if(!email){
    return next(createHttpError(402,'please enter the email'));
  }

  const transporter = nodemailer.createTransport({
    service: env.SMTP.service,
    auth: {
      user: env.SMTP.mail,
      pass: env.SMTP.password,
    },
  });

  const mailOptions = {
    from: env.SMTP.mail,
    to: email,
    subject: "Restaurant Promo Code",
    text: "Your Promo Code is: Q2gr0k",
    html: "<strong>Your Promo Code is: Q2gr0k</strong>",
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(201)
      .json({
        success: true,
        data: `Promo Code: Q2gr0k has been sent to ${email}`,
      });
  } catch (error) {
    return next(error);
  }
};
