<?php include "./includes/db.php"; ?>

  <?php
  $query = "SELECT * FROM  categories";
  $result = mysqli_query($connection, $query);

  while ($row = mysqli_fetch_assoc($result)) {
    $cat_title = $row['cat_title'];
    $cat_id = $row['cat_id'];
  ?>
   
  <a href='./category.php?category=<?php echo $cat_id; ?>' class="btn btn-rounded-outline-category">
   <?php echo $cat_title; ?>
  </a>

  <?php }
  ?>