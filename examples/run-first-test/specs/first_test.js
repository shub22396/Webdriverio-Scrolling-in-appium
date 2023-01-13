var assert = require('assert');

describe('Search Wikipedia Functionality', () => {
  // it('can find search results', async () => {


  //   var searchSelector = await $(`~Search Wikipedia`);
  //   await searchSelector.waitForDisplayed({ timeout: 30000 });
  //   await searchSelector.click();

  //   var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
  //   await insertTextSelector.waitForDisplayed({ timeout: 30000 });

  //   await insertTextSelector.addValue("Browsertack");
  //   await browser.pause(5000);

  //   var allProductsName = await $$(`android.widget.TextView`);
  //   assert(allProductsName.length > 0);
  // });

  it("Changes color", async () => {

    var color = await $("id=android:id/button1");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();
    
  });
  it("Changes", async () => {
    var color = await $("id=lab.prada.android.ui.mymodule.app:id/button1");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();

  

    var col = await $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ListView/android.widget.Button[12]');
    await col.waitForDisplayed({ timeout: 30000 });
     
      


    //await $('andorid=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(0,1000)')

  


    // await browser.execute('mobile: scroll', {direction: 'down' ,element: col})

    // await col
   
   await browser.touchAction([ 
    {action: 'longPress', element:col},
    { action: 'wait', ms: 1000 },
    { action: 'moveTo', x: 300, y: 900},
        
    
    'release' ]);

   

   //await Driver.execute("mobile: scroll", {direction: 'down'})

  // await col.executeScript("mobile: scroll", {direction: 'down'})

  //  await WebDriver.mobile.scroll({ direction: "down", times: 3 });
   await browser.pause(2000)


  
  });





});
