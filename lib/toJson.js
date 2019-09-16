export default jsonData => {
  const dataStr = JSON.stringify(jsonData);
  const dataUri = `data:application/json;charset=utf-8, ${encodeURIComponent(
    dataStr
  )}`;

  const exportFileDefaultName = 'jobTracking.json';

  // eslint-disable-next-line no-undef
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};
