import {ChangeEvent, ReactNode, useState} from "react";

interface IForm {
    className?: string,
    children?: string | ReactNode
}

interface IFormData {
    name: string,
    email: string,
    phone: string
}

export default function Form({children, className}: IForm) {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        phone: ''
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Добро пожаловать, ${formData.name}!`);
        setFormData({
            name: '',
            email: '',
            phone: '',
        });
    }
    return (
        <div className={className}>
            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4" >
                <input className="mt-1 w-full border rounded p-2 "
                       type='text'
                       placeholder='Name'
                       name='name'
                       required={true}
                       value={formData.name}
                       onChange={handleChange}
                />
                <input className="mt-1 w-full border rounded p-2 "
                       type='text'
                       placeholder='Email'
                       name='email'
                       required={true}
                       value={formData.email}
                       onChange={handleChange}
                />
                <input className="mt-1 w-full border rounded p-2 "
                       placeholder='Phone'
                       name='phone'
                       required={true}
                       value={formData.phone}
                       onChange={handleChange}
                />

                <button
                    type="submit"
                    className="transform rounded-lg bg-blue-600 text-white p-3 font-medium
                    hover:bg-blue-700 hover:scale-[1.02]
                    active:scale-95
                    transition-all duration-200"
                >
                    Submit
                </button>


                {children}
            </form>
        </div>
    );
};
