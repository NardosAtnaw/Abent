<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
    <title>Laws  | Abent Law Office</title>
  </head>

  <body>
    <header id="app" class="header">
      <nav class="nav" id="nav">
      </nav>
      <section class="laws-banner">
        <div class="law-banner-content">
          <h1 class="law-banner-title text-center">
            Legal Resources
          </h1>
          <form action="search.php" method="post">

            <div class="input-container">
              <button type="submit" name="submit" class="search-button"><img src="./img/search.svg" class="icon" alt="" /></button>
              <input class="input-field" type="search" placeholder="Search here..." name="search" />
            </div>
          </form>

        </div>
      </section>
    </header>


    <section class="categories">
      <div class="container">
      <div class="btn-container">
      <?php include './includes/sidebar.php'; ?>
      </div>
      </div>
    </section>

    <section class="laws laws-marign">
    <div class="laws-cards container" id="laws1">
      <?php include './includes/posts.php'; ?>
      </div>
    </section>

    <footer id="footer" class="footer laws-footer"></footer>

    <script src="./js/app.js"></script>
  </body>
</html>
