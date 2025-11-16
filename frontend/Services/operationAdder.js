import { OperationForm } from "../UI/form.js";
import { defineDateRange } from "../utils.js";
import { categories } from "../Repositories/categories.js";

export function CreateAddForm(onSubmit) {
  const form = document.querySelector("#addForm");
  const addBtn = document.querySelector("#addBtn");

  const addForm = new OperationForm(form);

  addForm.disableCategoryOptions();
  addForm.limitDateInput(...defineDateRange(3));
  addForm.onTypeChanged(categories);

  addBtn.addEventListener("click", () => {
    onSubmit(form, addForm.readForm());
  });

  return addForm;
}
