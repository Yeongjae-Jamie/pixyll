document.querySelectorAll('.yellow-button').forEach(button => {
  button.addEventListener('click', (event) => {
    event.target.blur(); // 버튼의 focus 상태 해제
  });

  // 마우스가 버튼에서 벗어날 때 focus 상태 해제
  button.addEventListener('mouseleave', (event) => {
    event.target.blur(); // focus 해제
  });
});
