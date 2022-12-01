import { useState } from "react"
import { useForm } from "react-hook-form";
import firebase from '../Config/firebase'



function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try {
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)    
        } catch (e) {
            console.log(e)
        }
        
    }
    
    return(
        <>
        <div><h2>ALTA de USUARIOS</h2></div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="registro">
                    <div>
                        <label>Nombre USUARIO(*)</label>
                    </div>
                    <div>
                        <input type='text' {...register("usuario", { required: true, maxLength: 10 })}></input>
                        {errors.usuario?.type==="required" && <span>Campo Requerido</span>}
                    </div>
                    <div>
                        <label>Nombre (*)</label>
                    </div>
                    <div>
                        <input type='text' {...register("nombres", { required: true })}></input>
                        {errors.nombres?.type==="required" && <span>Campo Requerido</span>}
                    </div>
                    <div>
                        <label>Apellido (*)</label>
                    </div>
                    <div>
                    <input type='text' {...register("apellidos", { required: true })}></input>
                        {errors.apellidos?.type==="required" && <span>Campo Requerido</span>}
                    </div>
                    <div>
                        <label>Email (*)</label>
                    </div>
                    <div>
                        <input type='email' {...register("email", { required: true })}></input>
                        {errors.email?.type==="required" && <span>Campo Requerido</span>}
                    </div>
                    <div>
                        <label>Contraseña</label>
                    </div>
                    <div>
                        <input type='password' {...register("password")}></input>

                    </div>
                    </div>
                    <div><button type="submit">Registrarse</button></div>
                </form>
                    
            </>
        )
}

export default Registro