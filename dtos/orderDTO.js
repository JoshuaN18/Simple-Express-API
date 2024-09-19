class OrderDTO {
    constructor({ first_name, last_name, phone_number, product_id }) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.product_id = product_id;
    }

    validate() {
        const errors = [];

        if (!this.first_name || typeof this.first_name !== 'string') {
            errors.push("Invalid or missing 'first_name'");
        }

        if (!this.last_name || typeof this.last_name !== 'string') {
            errors.push("Invalid or missing 'last_name'");
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!this.phone_number || !phonePattern.test(this.phone_number)) {
            errors.push("Invalid or missing 'phone_number' (should be a valid 10-digit number)");
        }

        if (!this.product_id || typeof this.product_id !== 'number') {
            errors.push("Invalid or missing 'product_id'");
        }

        return errors;
    }
}

export default OrderDTO;
  