import React from "react";
import { motion } from "framer-motion";
import { FileDown, Eye } from "lucide-react";

const MathsNotes = () => {
  const notes = [
    { title: "Chapter 1 - Real Numbers", pdf: "/pdfs/ch1.pdf" },
    { title: "Chapter 2 - Polynomials", pdf: "/pdfs/ch2.pdf" },
    { title: "Chapter 3 - Pair of Linear Equations", pdf: "/pdfs/ch3.pdf" },
    { title: "Chapter 4 - Quadratic Equations", pdf: "/pdfs/ch4.pdf" },
    { title: "Chapter 5 - Arithmetic Progressions", pdf: "/pdfs/ch5.pdf" },
    { title: "Chapter 6 - Triangles", pdf: "/pdfs/ch6.pdf" },
    { title: "Chapter 7 - Coordinate Geometry", pdf: "/pdfs/ch7.pdf" },
    { title: "Chapter 8 - Trigonometry", pdf: "/pdfs/ch8.pdf" },
    { title: "Chapter 9 - Circles", pdf: "/pdfs/ch9.pdf" },
    { title: "Chapter 10 - Surface Areas & Volumes", pdf: "/pdfs/ch10.pdf" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to from-blue-100 to-purple-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-700 drop-shadow">
        📘 Mathematics Notes
      </h1>

      <div className="flex flex-col items-center gap-10 max-w-3xl mx-auto">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl
                       hover:-translate-y-1 transition border border-purple-200"
          >
            <h2 className="text-2xl font-semibold text-purple-700">
              {note.title}
            </h2>

            <p className="text-gray-600 mt-2">
              Download or view complete notes.
            </p>

            <div className="mt-5 flex gap-4">
              {/* Download Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={note.pdf}
                download
                className="inline-flex items-center gap-2 bg-purple-600 text-white
                           px-5 py-3 rounded-xl hover:bg-purple-700 transition"
              >
                <FileDown size={20} /> Download
              </motion.a>

              {/* View Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => (window.location.href = `/view?pdf=${note.pdf}`)}
                className="inline-flex items-center gap-2 bg-green-600 text-white
                           px-5 py-3 rounded-xl hover:bg-green-700 transition"
              >
                <Eye size={20} /> View
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MathsNotes;
