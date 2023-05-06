export function imageTreatment(id: string) {
  switch (id.length) {
    case 2:
      return `0${id}`;
    case 3:
      return `${id}`;
    default:
      return `00${id}`;
  }
}
