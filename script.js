const students = [
  {
    name: 'Maria',
    firstNote: 10,
    secondNote: 6,
  },
  {
    name: 'José',
    firstNote: 9,
    secondNote: 5,
  },
  {
    name: 'Carla',
    firstNote: 8,
    secondNote: 7,
  },
  {
    name: 'Creitin',
    firstNote: 5,
    secondNote: 6,
  },
]

const average = (firstNote, secondNote) => (firstNote + secondNote) / 2

const isApproved = (student) => average(student.firstNote, student.secondNote) >= 7

function makeMessage(student) {
  
  const averageStudent = average(student.firstNote, student.secondNote)

  const averageMessage = `A média do(a) aluno(a) ${student.name} é: ${averageStudent}`

  let resultMessage
  if (isApproved(student)) {
    resultMessage = `Parabéns, ${student.name}! Você foi aprovado(a)!`
  } else {
    resultMessage = `Não foi dessa vez, ${student.name}! Tente novamente!`
  }

  return `${averageMessage}\n${resultMessage}`
}

for (let student of students) {
  alert(makeMessage(student))
}