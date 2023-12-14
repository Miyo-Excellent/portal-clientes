export const randomColor = () => {
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ];

  const color = Math.floor(Math.random() * colors.length);

  return colors[color];
};
