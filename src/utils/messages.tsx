import Swal from "sweetalert2";

const messages = {
  toast: (title: string, icon: string) => {
    Swal.fire({
      toast: true,
      icon,
      title,
      animation: false,
      position: "top-right",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast: any) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    } as any);
  },
  confirm: (title: string, text: string, callback: any) => {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  },
};

export default messages;
