function changeImageSize(url: string, size: number) {
  return `${url}?param=${size}y${size}"`;
}

export default changeImageSize;
