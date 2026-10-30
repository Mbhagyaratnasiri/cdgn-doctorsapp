import { useState, useEffect } from 'react'

function Header() {
  return (
    <header>
      <h1>Doctor App</h1>
      <div>
        <button>Home</button>
        <button>Add Doctor</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <div className="S1">
      <div>
        <h1>Mr.Doctor App</h1>
        <p>Find Your Doctors For Your Problems</p>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eYknR74Ta0dFcP2suWtiM6CuZGJy5lcUt8sEh29A7w&s=10"
          alt="Doctors Illustration"
        />
      </div>
    </div>
  )
}

function DoctorCard({ name, gender, specialization }) {
  return (
    <div>
      <div>
        <img
          width="100"
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
        />
      </div>
      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{specialization}</p>
      <button>View Details</button>
    </div>
  )
}

function DoctorList({ newdoctor }) {
  const [doctors, setDoctors] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [specializationFilter, setSpecializationFilter] = useState('')

  function loadDoctors() {
    setDoctors([
      { id: 1, name: 'Teja', age: 26, gender: 'Male', specialization: 'Muscles', salary: 7000000 },
      { id: 2, name: 'Sam', age: 26, gender: 'Male', specialization: 'Bones', salary: 4000000 },
      { id: 3, name: 'Anu', age: 25, gender: 'Female', specialization: 'Heart', salary: 5000000 },
    ])
  }

  useEffect(() => {
    loadDoctors()
  }, [])

  useEffect(() => {
    if (newdoctor) {
      setDoctors((prev) => [...prev, newdoctor])
    }
  }, [newdoctor])

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specializationFilter === '' ||
        doc.specialization.toLowerCase() === specializationFilter.toLowerCase())
  )

  return (
    <div>
      <div className="filters">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your doctor"
        />
        <select
          name="specialization"
          value={specializationFilter}
          onChange={(e) => setSpecializationFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
      </div>
      {filteredDoctors.length > 0 ? (
        <div className="doctorcontainer">
          {filteredDoctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              name={doc.name}
              gender={doc.gender}
              specialization={doc.specialization}
            />
          ))}
        </div>
      ) : (
        <h1>Doctors not found</h1>
      )}
    </div>
  )
}

function AddDoctorForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [salary, setSalary] = useState('')
  const [newDoctor, setNewDoctor] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setNewDoctor({
      id: Date.now(),
      name: name,
      age: age,
      gender: gender,
      specialization: specialization,
      salary: salary,
    })
    console.log(newDoctor)
  }

  return (
    <div>
      <h1>Add New Doctor</h1>
      <form onSubmit={handleSubmit} className="formcontainer">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Doctor Name"
          required
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Enter Age"
          required
        />
        <input
          onChange={(e) => setSpecialization(e.target.value)}
          value={specialization}
          type="text"
          placeholder="Enter Specialization"
          required
        />
        <select
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          name="gender"
          id="gender"
          required
        >
          <option value="" disabled>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
          type="number"
          placeholder="Enter Salary"
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
      <DoctorList newdoctor={newDoctor} />
    </div>
  )
}

function App() {
  const [c, setC] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('api call running')
  }, [count])

  return (
    <div>
      {c}
      <button onClick={() => setC(c + 1)}>inc c</button>
      {count}
      <button onClick={() => setCount(count + 1)}>inc count</button>
      <Header />
      <Hero />
      <div className="doctorcontainer">
        <DoctorCard name="John" gender="male" specialization="Bones Specialist" />
        <DoctorCard name="Jessy" gender="female" specialization="Heart Specialist" />
        <DoctorCard name="Jack" gender="male" specialization="Muscles Specialist" />
        <DoctorCard name="Jane" gender="female" specialization="Neurology" />
        <DoctorCard name="Jorden" gender="male" specialization="Orthopedic" />
      </div>
      <AddDoctorForm />
    </div>
  )
}

export default App
