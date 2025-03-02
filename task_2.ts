interface FormData {
    username: string,
    email: string,
    age: number
}

type ValidationRules<T> = {
    [K in keyof T]: (value: T[K]) => string | null;
};
  
const validationRules: ValidationRules<FormData> = {
    username: (value) => (value.trim() ? null : "Поле 'username' не может быть пустым"),
    email: (value) => (value.trim() ? null : "Поле 'email' не может быть пустым"),
    age: (value) => (value > 0 ? null : "Поле 'age' должно быть больше 0"),
};
  
function validateForm(formData: FormData): Partial<Record<keyof FormData, string>> {
    const errors: Partial<Record<keyof FormData, string>> = {};
    
    for (const key in formData) {
        const fieldKey = key as keyof FormData;
        const error = validationRules[fieldKey](formData[fieldKey]);
        if (error) {
            errors[fieldKey] = error;
        }
    }
    
    return errors;
}
  
// test
const formData: FormData = {
    username: "",
    email: "test@example.com",
    age: -5,
};
  
console.log(validateForm(formData));