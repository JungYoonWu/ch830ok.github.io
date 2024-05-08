document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // 기본 제출 이벤트 방지

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 사용자 이름과 비밀번호가 입력되었는지 확인
    if (username && password) {
        alert('Login successful for: ' + username); // 로그인 성공 알림
    } else {
        alert('Please enter both username and password.'); // 입력 요구 알림
    }
};

// "Sign Up" 링크 클릭 이벤트 핸들러 추가
document.getElementById('signUp').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    window.location.href = 'signup.html'; // 회원가입 페이지로 이동
});
