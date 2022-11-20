type StringOrNumber = string | number;
type ObjectWithName = {name: string, uid: StringOrNumber};

const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} mempunyai uid ${uid}`)
}

const greet = (user: ObjectWithName) => {
    console.log(`${user.name} Menyapa`)
}

const greetAgain = (user: ObjectWithName) => {
    console.log(`${user.name} Menyapa Lagi`)
}
