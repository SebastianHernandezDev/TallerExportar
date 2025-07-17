const generator = require('generate-password')

const password = generator.generate(
    {
        length:10
    }
)

console.log("tu contraseña es: ", password);

