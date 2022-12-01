import { useState } from "react"
import { useForm } from "react-hook-form";

function Acceso(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return(
        <>
        <div><h2>Ingreso USUARIO</h2></div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="acceso">
                    <div>
                        <label>Nombre USUARIO(*)</label>
                    </div>
                    <div>
                        <input type='text' {...register("usuario", { required: true, maxLength: 10 })}></input>
                        {errors.usuario?.type==="required" && <span>Campo Requerido</span>}
                    </div>
                    <div>
                        <label>Contraseña</label>
                    </div>
                    <div>
                        <input type='password' {...register("password", { required: true,minLength:6,maxLength:12 })}></input>
                        {errors.password?.type==="required" && <span>Campo Requerido</span>}
                        {errors.password?.type==="minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                        {errors.password?.type==="maxLength" && <span>No puede superar 12 caracteres</span>}
                    </div>
                    </div>
                    <div><button type="submit">INGRESAR</button></div>
                </form>
                    
            </>
        )
}

export default Acceso