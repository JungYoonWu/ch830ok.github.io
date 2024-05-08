document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault(); // 폼의 기본 제출 이벤트를 방지합니다.

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // 비밀번호와 비밀번호 확인 입력이 일치하는지 검사합니다.
    if (password !== confirmPassword) {
        alert('Passwords do not match.'); // 비밀번호가 일치하지 않으면 사용자에게 알림
        return;
    }

    // 모든 필드가 적절히 채워졌는지 검사합니다.
    if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields.'); // 필드가 비어있으면 사용자에게 알림
        return;
    }

    // 모든 검사를 통과한 경우, 사용자에게 성공적으로 등록되었다고 알림
    alert('Registration complete. Welcome, ' + username + '!');
};

// "Already have an account? Log In" 링크 클릭 이벤트 핸들러
document.getElementById('signIn').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    window.location.href = 'login.html'; // 로그인 페이지로 이동
});
