import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
    {pacientes && pacientes.length ? (
      <>
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    <p className="text-lg mt-5 mb-10 text-center"> Administra tus pacientes y {''}
      <span className="text-indigo-600 font-bold">turnos</span>
      </p>

      { pacientes.map(paciente => {
        return (
        <Paciente
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
        )
    })}
      </>
    ): (
      <>
       <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
    <p className="text-lg mt-5 mb-10 text-center"> Agrega un nuevo paciente {''}
      <span className="text-indigo-600 font-bold">y aparecerán aquí abajo</span>
      </p>
      </>
    )}
    
    </div>
  )
}

export default ListadoPacientes
