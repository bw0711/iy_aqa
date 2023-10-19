const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true
};

const serializedSettings = JSON.stringify(userSettings);
console.log(serializedSettings);

const deserializedSettings = JSON.parse(serializedSettings);
console.log(deserializedSettings);