const messages = [
{name: "― C.S. Lewis, The Four Loves"
, quote: "Friendship ... is born at the moment when one man says to anotherWhat! You too? I thought that no one but myself . . ."
},
{
name: "― Elbert Hubbard",
quote: "A friend is someone who knows all about you and still loves you."
},
{
name: "― Oscar Wilde",
quote: "To live is the rarest thing in the world. Most people exist, that is all."
},
{
name: "― Oscar Wilde",
quote: "Always forgive your enemies; nothing annoys them so much."
},
{
name: "― Mahatma Gandhi",
quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
}
];

console.log("messages[1].name");

const randomMessage = (message) => {
    const randomNumber = Math.floor(Math.random() * message.length);
    const randomQuote = message[randomNumber].quote;
    const randomName = message[randomNumber].name;
    console.log(`A wise ${randomName} once said '${randomQuote}'`); 
}

randomMessage(messages);