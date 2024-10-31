import mongodb from 'mongoose';

export const connection = async () => {
    try {
        const conn = await mongodb.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }   catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);//1 means exit with failure and 0 means exit with success
    }
}