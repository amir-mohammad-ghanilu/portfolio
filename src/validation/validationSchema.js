import * as Yup from "yup";

export const validtaionSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نمی باشد")
    .required("ایمیل الزامی باشد"),
  subject: Yup.string().required("نوشتن عنوان الزامی می باشد"),
  message: Yup.string().required("نوشتن پیام الزامی می باشد"),
});
