"use client";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex w-screen items-center justify-center bg-gray-500/35">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">تأیید حذف</h2>
        <p>آیا از حذف این بنر اطمینان دارید؟</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded bg-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
          >
            انصراف
          </button>
          <button
            onClick={onConfirm}
            className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
          >
            تأیید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
