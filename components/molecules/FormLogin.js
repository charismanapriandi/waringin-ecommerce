import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Button, Gap, Input } from '../atoms'
import { Error } from '.'
import { useForm } from 'react-hook-form'

const FormLogin = () => {
    const { watch, handleSubmit, register, formState: { errors } } = useForm()
    console.log(watch('email'));
    
    const onLogin = data => {
        console.log(data);
    }

    return (
        <div className="w-96 ring ring-background-800 p-4 rounded-xl">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <p className="cursor-pointer text-sm">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <span className="ml-2">
                            kembali
                        </span>
                    </p>
                </Link>
                <p>Masuk</p>
            </div>
            <Gap height={20} />
            <form onSubmit={handleSubmit(onLogin)}>
                <div>
                    <Input
                        {...register('email', {
                            required: true,
                            pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                        })} 
                        placeholder="email" />
                        {errors.email?.type === 'required' && 
                            <Error>Email tidak boleh kosong</Error>
                        }
                        {errors.email?.type === 'pattern' && 
                            <Error>Email tidak valid</Error>
                        }
                        <Gap height={5} />
                    <Input
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                        placeholder="password" 
                        password={true}/>
                        {errors.password?.type === 'required' && 
                            <Error>Password harus diisi</Error>
                        } 
                        {errors.password?.type === 'minLength' && 
                            <Error>Pasword harus lebih dari 6 huruf</Error>
                        } 
                    <Gap height={20} />
                    <Button active={true}>Masuk</Button>
                </div>
                <Gap height={10} />
                <p className="text-center">atau masuk dengan</p>
                <Gap height={10} />
                <Button type="submit">
                    <FontAwesomeIcon icon={faGoogle} />
                    <span className="ml-4">Google</span>
                </Button>
                {/* <Gap height={10} /> */}
                {/* <div>
                    <p 
                        className="text-sm">
                        Belum punya akun? 
                        <span className="hover:text-background-active cursor-pointer ml-2 transition-all duration-300">DAFTAR</span>
                    </p>
                </div> */}
            </form>
        </div>
    )
}

export default FormLogin