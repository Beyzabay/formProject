import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema=yup.object().shape({
    email:yup.string()
    .email('Geçerli bir email adresi giriniz.')
    .required('Email bilgisi girmek zorunludur'),
    age:yup.number()
    .positive('Lütfen pozitif bir yaş değeri giriniz')
    .integer('Lütfen yaşınızı tam sayı olarak giriniz')
    .required('Yaş bilgisi girmek zorunludur.'),
    password:yup.string()
    .min(5,'Lütfen minimum 5 karakter giriniz')
    .matches(passwordRules,{
        message:'Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz',
    }).required('Şifre girmek zorunludur'),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur'),
})


export const advanceSchema=yup.object().shape({
    username:yup
    .string()
    .min(3,'Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır')
    .required('Kullanıcı adı zorunludur'),
    university:yup
    .string()
    .oneOf(['bogazici','gsu','odtü','itü'],'Lütfen üniversitenizi seçiniz')
    .required('Lütfen üniversitenizi seçiniz'),
    isAccepted:yup
    .boolean()
    .oneOf([true],'Kullanım koşullarını kabul ediniz'),



    })
