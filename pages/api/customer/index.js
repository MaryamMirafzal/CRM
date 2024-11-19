import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    console.log("Handler called, method:", req.method);

    // اتصال به دیتابیس
    try {
        await connectDB();
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to DB:", error);
        return res.status(500).json({ status: "failed", message: "Error in Connecting to DB" });
    }

    // بررسی درخواست POST
    if (req.method === "POST") {
        const data = req.body.data;
        if (!data || !data.name || !data.lastName || !data.email) {
            return res.status(400).json({ status: "failed", message: "Invalid data" });
        }

        try {
            const customer = await Customer.create(data);
            return res.status(201).json({ status: "success", message: "Data Created", data: customer });
        } catch (error) {
            console.log("Error creating customer:", error);
            return res.status(500).json({ status: "failed", message: "Error in storing data in DB" });
        }
    }

    // برای درخواست‌های GET، مثلاً لیست مشتریان، داده‌ها را برمی‌گردانیم
    if (req.method === "GET") {
        try {
            const customers = await Customer.find({});
            return res.status(200).json({ status: "success", data: customers });
        } catch (error) {
            console.log("Error fetching customers:", error);
            return res.status(500).json({ status: "failed", message: "Error in fetching data from DB" });
        }
    }

    // اگر روش دیگر ارسال شد
    return res.status(405).json({ status: "failed", message: "Method Not Allowed" });
}

