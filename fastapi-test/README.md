# fastapi-test

Simple FastAPI application.

## Requirements

* Python 3.13 or later
* Git

## Clone

```bash
git clone <repository-url>
cd fastapi-test
```

## Create Virtual Environment

```bash
python -m venv .venv
```

## Activate Virtual Environment

### Windows PowerShell

```powershell
.\.venv\Scripts\Activate.ps1
```

### Windows Command Prompt

```cmd
.venv\Scripts\activate.bat
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Application

```bash
python -m uvicorn main:app --reload
```

## Access Application

Open the following URL in your browser:

```
http://127.0.0.1:8000
```

## API Documentation

FastAPI automatically generates API documentation.

Swagger UI:

```
http://127.0.0.1:8000/docs
```

ReDoc:

```
http://127.0.0.1:8000/redoc
```

## Project Structure

```text
fastapi-test/
├─ main.py
├─ requirements.txt
├─ README.md
├─ .gitignore
├─ templates/
└─ static/
```
