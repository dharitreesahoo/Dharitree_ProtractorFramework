// spec.js
describe('Protractor Demo App', function () {
  function addItemToCart(itemName) {
    element.all(by.tagName("app-card")).each(function (item) {
      item.element(by.css("h4 a")).getText().then(function (itemName1) {
        if (itemName1 === itemName) {
          item.element(by.css("button[class*='btn btn-info']")).click();
        }
      })

    });

  }
  it('should have a title', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.getTitle().then(function (title) {
      console.log(title);
      expect(browser.getTitle()).toEqual('ProtoCommerce');

    })
  });
  it('should have a title', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.driver.manage().window().maximize();

    browser.getTitle().then(function (title) {
      console.log(title);
      expect(browser.getTitle()).toEqual('ProtoCommerce');
      element(by.name("name")).sendKeys("myStudents");
      element(by.css("input[name='email']")).sendKeys("myStudents@gmail.com");
      element(by.id("exampleInputPassword1")).sendKeys("password1");
      element(by.css("input[type='checkbox']")).click();
      //this option select the 1st option only
      //element(by.cssContainingText("select[id='exampleFormControlSelect1'] option")).click();
      //use below for selecting female
      element(by.cssContainingText("select[id='exampleFormControlSelect1'] option", "Female")).click();
      //browser.sleep(4000);
      //element.all(by.name("inlineRadio2")).first().click();
      browser.sleep(4000);
      element.all(by.css("[class='alert alert-danger']")).count().then(function (size) {
        if (size === 0) {
          console.log("There is no error msg in webpage====");
        }
      })

      element(by.buttonText("Submit")).click().then(function () {
        element(by.css("div[class*='success']")).getText().then(function (successMsg) {
          console.log("Success msg is shwoing as " + successMsg);
        });
      });
      element(by.name("name")).clear();
      element(by.name("name")).sendKeys("m").then(function () {
        element(by.css("[class='alert alert-danger']")).getText().then(function (alertMsg) {
          console.log(alertMsg);
        });
      });



    })
  });

  it('Display the price based on the item', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.driver.manage().window().maximize();
    element(by.linkText("Shop")).click();
    addItemToCart("Samsung Note 8");
    addItemToCart("iphone X");
    addItemToCart("Nokia Edge");
    addItemToCart("Blackberry");
    element(by.partialLinkText("Checkout")).getText().then(function (cartDetails) {
      var result = cartDetails.split("(");
      //console.log("No of added item  ====="+result[1].trim().charAt(0));
    })
    browser.sleep(8000);
    element(by.partialLinkText("Checkout")).click();
    table = element(by.css("table[class='table table-hover']"));
    var sum = 0;
    table.all(by.tagName("tr")).each(function (row) {
      row.all(by.css("td:nth-child(3) strong")).getText().then(function (cellVal) {
        if (cellVal.length != 0) {
          // console.log(Number(cellVal.toString().split(".")[1].trim()));
          return sum = sum + Number(cellVal.toString().split(".")[1].trim());
        }
        //console.log("------------"+sum);
      });
      //console.log("====="+sum)
    });
    console.log("=====" + sum)
  });

  fit('Display the price based on the item', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.driver.manage().window().maximize();
    element(by.linkText("Shop")).click();
    addItemToCart("Samsung Note 8");
    addItemToCart("iphone X");
    addItemToCart("Nokia Edge");
    addItemToCart("Blackberry");
    element(by.partialLinkText("Checkout")).getText().then(function (cartDetails) {
      var result = cartDetails.split("(");
      //console.log("No of added item  ====="+result[1].trim().charAt(0));
    })
    browser.sleep(8000);
    element(by.partialLinkText("Checkout")).click();


    let total = element
      .all(by.css('#table table-hover > tbody > tr > td:nth-child(3)'))
      .reduce(function (acc, item) {
        return item.getText().then(function (txt) {
          return acc + txt.trim() * 1;
        });
      }, 0);
    console.log("total====" + total);

    expect(total).toEqual(600);

  });
});