"use client";
import ApplyForm from "./ApplyForm";

export default function ApplyModal({ university, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg p-6 rounded relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">
          Apply to {university.name}
        </h2>

        <ApplyForm universityId={university.id} />
      </div>
    </div>
  );
}
