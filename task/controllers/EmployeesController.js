// import model Employees
const Employees = require("../../models/Employees");
const Student = require("../models/Employeest")

class StudentController {
    async index(req, res) {
        // TODO 4: Tampilkan data employeess
        const employeess = await Employees.all();

        const data = {
            message: "Menampilkan data employees",
            data: employeess
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        const students = await Employees.create(req.body);
        const data = {
            message: "Menambahkan data employees",
            data: employeess,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id students
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employeess = await Employees.find(id);

        if (employeess) {
            // update data
            const studentUpdated = await Employees.update(id, req.body);
            const data = {
                message: "Mengupdate data employees",
                data: EmployeesUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const student = await Employees.find(id);

        if (employeess) {
            // hapus data
            await Employees.delete(id);
            const data = {
                message: "Menghapus data student",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employees= await Employees.find(id);

        if (employees) {
            const data = {
                message: "Menampilkan detail data employees",
                data: employees,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }
}

// make an object Employees Controller
const object = new EmployeesController();

// export object
module.exports = object;