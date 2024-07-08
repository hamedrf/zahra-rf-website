"use client";
import Accordion from "react-bootstrap/Accordion";

const FaqSelction = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" data-aos="fade-right">
        <Accordion.Header className="faq-header">
          <span className="d-flex ms-4">
            <span className="faq-num rounded-circle d-flex justify-content-center align-items-center pt-2 mx-2">
              1
            </span>{" "}
            <span>
              دختر من تنهایی درس نمی‌خواند. تا بهش نگم سمت کتاب و دفترش نمی‌رود!
              چکار کنم خودش بشیند بخواند؟
            </span>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          دانش‌آموز به تنهایی و مستقل درس خواندن نشانه توانمندی نیست. چرا
          دانش‌آموز باید علم روانشناسی و مشاوره بداند که بلد باشد چگونه باید
          مطالعه کند؟ چه کسی به دانش‌آموزان ما روش مطالعه یاد داده؟ می‌گویید درس
          بخوان، یعنی دقیقا باید چه کار کند؟ خودت بنویس یعنی دقیقا چطوری باید
          این کار را بکند؟ یعنی مثل نقاشی باید کلمات را نقاشی کند؟ پس نیاز به
          راهنما و کاربلد دارد تا به او راهکار بدهد و کمکش کند.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" data-aos="fade-left">
        <Accordion.Header className="faq-header">
          <span className="d-flex ms-4">
            <span className="faq-num rounded-circle d-flex justify-content-center align-items-center pt-2 mx-2">
              2
            </span>{" "}
            <span>
              به پسرم می‌گویم درس بخوان، می‌گوید آن‌هایی که درس خواندند الان چه
              کار کردند؟
            </span>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          در علم روانشناسی به این واکنش می‌گوییم مکانیزم دفاعی. برای اینکه با
          ضعف‌های خود روبرو نشود ترجیح می‌دهد پشت این مکانیزم خود را پنهان کند.
          از آنجایی که در گارد دفاعی است تلاش شما بی‌فایده خواهد بود. پس راهکار
          چیست؟ شما فقط یک راه دارید، اجازه دهید با واقعیت خودش و ضعف‌هایش روبرو
          شود. آن وقت مکانیزم دفاعی‌اش را خاموش می‌کند و در مسیر تحصیل موفقیت
          کسب می‌کند. یعنی چکار کنید؟ ساده است: هیچ کاری نکنید. تذکر ندهید،
          مشاور نگیرید، معلم نگیرید و حداقل در ظاهر هم تاییدش کنید. صبور باشید.
          به فرزندتان فرصت روبرو شدن با خودش را بدهید، فرصت دهید تجربه کند حتی
          اگر یک سال تکرار پایه بخورد. دیر رسیدن بهتر از هرگز نرسیدن است.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" data-aos="fade-right">
        <Accordion.Header className="faq-header">
          <span className="d-flex ms-4">
            <span className="faq-num rounded-circle d-flex justify-content-center align-items-center pt-2 mx-2">
              3
            </span>{" "}
            <span>
              سلام، ببخشید خوب چطوری درس بخونیم؟ من خودم درس‌هایم را طول ترم
              زیاد می‌خوانم و شب امتحان اساسی‌تر می‌خوانم. این یعنی تو پایه‌های
              بعد دچار مشکل می‌شوم؟
            </span>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          ببینید، اگر نمره خوبی می‌گیرید یعنی مشکلی وجود ندارد و روش مطالعه
          موثری دارید. اگر نمره خوبی نمی‌گیرید یا زمان زیادی برای مطالعه
          می‌گذارید و به همان اندازه نمره عالی نمی‌گیرید یعنی باید عیب‌یابی شود.
          در عیب‌یابی از شما یک آزمون می‌گیریم و از نوع پاسخ شما می‌گوییم مشکل
          چیه و چکار باید بکنید.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" data-aos="fade-left">
        <Accordion.Header className="faq-header">
          <span className="d-flex ms-4">
            <span className="faq-num rounded-circle d-flex justify-content-center align-items-center pt-2 mx-2">
              4
            </span>{" "}
            <span>
              فرزندم در یک مدرسه خوب درس می‌خواند و آزمون‌های تستی‌اش را خوب
              نمی‌دهد. چه راهکاری دارید که درصد فرزندم بهتر شود؟ مدرسه‌اش فقط
              تستی کار می‌کند!
            </span>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          نکته مهمی که نادیده گرفته شده در سوال شما تغییرات جدید کنکور ۱۴۰۳ است.
          این تغییرات شامل تاثیر ۵۰٪ قطعی امتحانات نهایی است. یعنی مدارسی که
          هنوز به تستی اکتفا می‌کنند به تغییرات جدید بروز نشده‌اند و این
          دانش‌آموزان در کنکور ۱۴۰۳ به بعد رتبه و قبولی خوبی نمی‌گیرند. چرا؟ چون
          کسی که تستی کار می‌کند در تشریحی موفق نیست و عملاً ۵۰٪ کنکور را از دست
          داده‌اند. هر ترازی بگیرد تقسیم بر ۲ می‌شود. یعنی اگر فرزند شما تراز ۱۲
          هزار بگیرد در کنکور ۱۴۰۳ عملاً تراز ۶ هزار گرفته.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" data-aos="fade-right">
        <Accordion.Header className="faq-header">
          <span className="d-flex ms-4">
            <span className="faq-num rounded-circle d-flex justify-content-center align-items-center pt-2 mx-2">
              5
            </span>{" "}
            <span>
              سلام، پسرم کلاس هشتم است و نگران این هستم که برای انتخاب رشته دقت
              کند که به مشکل برنخورد. چطور می‌توانم کمکش کنم؟
            </span>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          برای انتخاب رشته از پایه هفتم باید برنامه‌ریزی کنید. پایه هفتم و هشتم
          در انتخاب رشته با ضریب ۱ تاثیر می‌گذارد. بهترین کمک به فرزندتان
          استعداد‌یابی و برنامه‌ریزی هدفمند براساس استعدادش است. چیه و چکار باید
          بکنید.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqSelction;
