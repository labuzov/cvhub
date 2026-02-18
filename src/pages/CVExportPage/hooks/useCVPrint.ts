export const useCVPrint = (name: string) => {
  const handlePrint = () => {
    const title = document.title;
  
    document.title = name;
  
    window.print();
  
    document.title = title;
  }

  return {
    handlePrint,
  }
}