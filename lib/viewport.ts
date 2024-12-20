export const implementDocumentHeight = () => {
  const documentHeight = () => {
    const doc = document.documentElement;

    doc.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  };

  window.addEventListener('resize', documentHeight);

  documentHeight();
};
