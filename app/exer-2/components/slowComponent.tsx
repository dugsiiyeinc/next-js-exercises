const slowComponent = async () => {
    await new Promise(resolve => setTimeout(resolve, 10000));
  return <div>slowComponent</div>;
};

export default slowComponent;