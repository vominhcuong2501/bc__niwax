// header

window.onscroll = function() { // hàm này bắt sự kiện cuộn trang của user, khi user cuộn trang thì hàm này sẽ được thực thi.

    // Nếu cuộn trang xuống dưới cách top hơn 100px thì sẽ thực hiện câu lệnh ở dòng số 7
    if(window.scrollY > 500){

        // Trỏ đến thẻ có id là header, mình đã nói ở trên, sau đó thêm vào thẻ này 1 class là header-scroll
        document.getElementById('header').classList.add('header-scroll');
    }else {

        // Nếu cuộn trang lên trên cách top nhỏ hơn 100px thì sẽ thực hiện câu lệnh này
        //Lệnh này sẽ trỏ đến thẻ header và xóa class header-scroll đi
        document.getElementById('header').classList.remove('header-scroll');
    }
};