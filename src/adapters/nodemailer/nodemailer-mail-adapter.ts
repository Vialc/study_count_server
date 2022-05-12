import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "671b7bc44e9891",
    pass: "d730d250cc1a3f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
     await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Vitor Alcântara <costec222@gmail.com>',
    subject,
    html: body,
  })
  };
}