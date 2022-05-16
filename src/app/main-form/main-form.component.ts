import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-main-form",
  templateUrl: "./main-form.component.html",
  styleUrls: ["./main-form.component.css"],
})
export class MainFormComponent implements OnInit {
  results = [
    "Sociálne siete Vás negatívne ovplyvňujú, mali by ste skrátiť čas ich používania!",
    "Sociálne siete vás nijako neovplyvňujú!",
    "Sociálne siete Vás ovplyvňujú skôr v dobrom smere!",
  ];

  question1 = [
    { value: 1, viewValue: "mám vážny problém odísť" },
    { value: 2, viewValue: "musím sa chvíľu presviedčať" },
    { value: 4, viewValue: "odídem kedykoľvek chcem" },
  ];

  question2 = [
    { value: 3, viewValue: "nemá to na mňa žiaden vplyv" },
    { value: 5, viewValue: "mám zo seba lepší pocit" },
    {
      value: 1,
      viewValue: "nálada sa mi zhorší, keď vidím príspevky ostatných",
    },
  ];

  question3 = [
    { value: 1, viewValue: "mám problémy zaspať" },
    { value: 2, viewValue: "zaspávanie mi trvá dlhšie" },
    { value: 3, viewValue: "nemá to na mňa vplyv" },
    { value: 4, viewValue: "lepšie sa mi zaspáva" },
    { value: 5, viewValue: "spí sa mi výborne" },
  ];

  questionForm = this.fb.group({
    field1: [null, Validators.required],
    field2: [null, Validators.required],
    field3: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.questionForm.valid) {
      alert("Nie sú vyplnené všetky polia");
      return;
    }

    const result: any = Object.values(this.questionForm.value).reduce(
      (a: string, b: string) => parseInt(a) + parseInt(b)
    );

    alert(this.results[Math.round(result / 5) - 1]);
  }
}
