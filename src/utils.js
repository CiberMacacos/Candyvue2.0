import Swal from "sweetalert2";

export function alertKoa(title, text, icon, btn) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: btn
  })
}

export default function alertColor(title, text, icon, btn) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: btn,
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff',
    backdrop: `
    rgba(0,0,123,0.4)
  `
  })
}
