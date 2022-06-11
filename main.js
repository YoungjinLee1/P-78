var images = ["https://thumbs.dreamstime.com/b/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg",
  "https://previews.123rf.com/images/dazdraperma/dazdraperma1108/dazdraperma110800007/10214665-illustration-of-two-brothers-go-to-school.jpg",
  "https://cdn5.vectorstock.com/i/1000x1000/45/09/cute-cartoon-of-a-young-mother-vector-4414509.jpg",
  "https://thumbs.dreamstime.com/z/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg"];

var names = ["Alia Singh", "Rocky Singh", "Soni Singh", "Diljeet Singh"];

var i = 0;
function update() {
  document.getElementById("family_member_image").src = images[i];
  document.getElementById("family_member_name").innerHTML = names[i];
  i++;
  if (i >= 4) {
    i = 0;
  }
}